package streams;

import java.util.*;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Master {
    public static void main(String[] args) {
        var nums = List.of(10, 20, 30, 40, 50);

        // Compute average without summaryStatistics
        var r = nums.stream().collect(Collectors.teeing(
                Collectors.summingInt(Integer::intValue),
                Collectors.counting(),
                (sum, count) -> (double) sum / count
        ));
        System.out.println(
                r
        );

        // Find the coldest and hottest city in a single stream pass using teeing().
        record Temp(String city, int celsius) {
        }
        var readings = List.of(
                new Temp("Oslo", -5), new Temp("Cairo", 38),
                new Temp("London", 12), new Temp("Reykjavik", -12),
                new Temp("Bangkok", 34)
        );

        var r2 = readings.stream().collect(Collectors.teeing(
                Collectors.maxBy(Comparator.comparingInt(a -> a.celsius)),
                Collectors.minBy(Comparator.comparingInt(a -> a.celsius)),
                (max, min) -> "Coldest : " + min.get().city + ", Hottest: " + max.get().city
        ));
        System.out.println(
            r2
        );

        // Use mapMulti() to emit each even number twice and each odd number zero times
        var nums2 = List.of(1, 2, 3, 4, 5);
        System.out.println(
                nums2.stream().mapMulti((n, consumer) -> {
                            if (n % 2 == 0) {
                                consumer.accept(n);
                                consumer.accept(n);
                            }
                        }
                ).collect(Collectors.toList())
        ); // [2, 2, 4, 4]

        // Merge sorted list
        var a = List.of(1, 3, 5, 7, 9);
        var b = List.of(2, 4, 6, 8, 10);
        // O(nlogn)
        var merged = Stream.concat(a.stream(), b.stream())
                .sorted()
                .collect(Collectors.toList());

        // O(n)
        Iterator<Integer> itA = a.iterator();
        Iterator<Integer> itB = b.iterator();

        Stream<Integer> mergedStream = Stream.generate(new Supplier<Integer>() {
                    Integer nextA = itA.hasNext() ? itA.next() : null;
                    Integer nextB = itB.hasNext() ? itB.next() : null;

                    @Override
                    public Integer get() {
                        if (nextA == null && nextB == null) return null;

                        Integer result;
                        if (nextA != null && (nextB == null || nextA <= nextB)) {
                            result = nextA;
                            nextA = itA.hasNext() ? itA.next() : null;
                        } else {
                            result = nextB;
                            nextB = itB.hasNext() ? itB.next() : null;
                        }
                        return result;
                    }
                })
                .takeWhile(Objects::nonNull); // stop when both iterators exhausted

        var merged2 = mergedStream.toList();
        System.out.println(merged);
        System.out.println(merged2);

        // Total characters across all strings
        var sentences = List.of(
                "hello world", "java streams", "are powerful"
        );

        long letterCount = sentences.stream()
                .flatMapToInt(String::chars)
                .filter(Character::isLetter)
                .count();
        System.out.println(
              letterCount
        );

        // Produce Map mapping department name to a sorted list of employee names
        record Employee(String name, String dept) {}
        var staff = List.of(
                new Employee("Alice","Eng"),
                new Employee("Bob","HR"),
                new Employee("Carol","Eng"),
                new Employee("Dave","HR"),
                new Employee("Eve","Finance")
        );

        var ret = staff.stream().collect(Collectors.groupingBy(
                e -> e.dept(),
                Collectors.mapping(Employee::name,
                        Collectors.collectingAndThen(
                                Collectors.toList(),
                                list -> list.stream().sorted().collect(Collectors.toList())
                ))
        ));

        System.out.println(ret);
    }
}
