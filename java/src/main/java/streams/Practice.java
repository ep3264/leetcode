package streams;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Practice {
    public static void main(String[] args) {
        LinkedList<Integer> linked =
                Stream.of(1, 2, 3).collect(Collectors.toCollection(LinkedList::new));

        Map<Integer, String> map =
                Stream.of("a", "b", "cc")
                        .collect(Collectors.toMap(
                                String::length,
                                s -> s,
                                (v1, v2) -> v1 + "," + v2
                        ));
        System.out.println(map); // {1=a,b, 2=cc}

        String result =
                Stream.of("A", "B", "C")
                        .collect(Collectors.joining(", ", "[", "]")); // [A, B, C]
        System.out.println(
                Stream.of(1, 2, 3)
                        .collect(Collectors.counting()));

        // List of names starting with "A"
        var names = List.of("Alice", "Bob", "Anna", "Charlie", "Andrew");
        System.out.println(
                names.stream().filter(s -> s.startsWith("A")).collect(Collectors.toList())
        );

        // Collect to a Set — remove duplicates
        var words = List.of("java", "stream", "java", "api", "stream");
        System.out.println(
                words.stream().collect(Collectors.toSet())
        );
        // order-preserving:
        System.out.println(
                words.stream().distinct().collect(Collectors.toList())
        );

        //  Join strings with a delimiter
        var tags = List.of("java", "streams", "interview");

        System.out.println(
                tags.stream().collect(Collectors.joining(","))
        );

        // Sum a list using reduce
        var nums = List.of(1, 2, 3, 4, 5);
        System.out.println(
                nums.stream().reduce((a, b) -> a + b)
        );
        System.out.println(
                nums.stream()
                        .reduce(0, Integer::sum)
        );

        // Find the maximum using reduce
        var nums2 = List.of(3, 7, 1, 9, 4);

        System.out.println(
                nums2.stream()
                        .reduce(Integer::max)
        );
        System.out.println(
                nums2.stream().reduce(0, (a, b) -> a > b ? a : b)
        );


        record Employee(String name, String dept, int salary) {
        }
        var staff = List.of(
                new Employee("Alice", "Eng", 90000),
                new Employee("Bob", "HR", 70000),
                new Employee("Carol", "Eng", 85000),
                new Employee("Dave", "HR", 72000)
        );
        // Group employees by department
        System.out.println(
                staff.stream().collect(Collectors.groupingBy(
                        Employee::dept,
                        Collectors.mapping(Employee::name, Collectors.toUnmodifiableList())
                ))
        );

        // Produce a Map with the number of employees per department.
        System.out.println(
                staff.stream().collect(Collectors.groupingBy(
                        Employee::dept,
                        Collectors.counting()
                ))
        );

        // Produce Map with average salary per department.
        System.out.println(
                staff.stream().collect(Collectors.groupingBy(
                                Employee::dept,
                                Collectors.averagingDouble(Employee::salary)
                        )
                )
        );

        // Split into even and odd numbers using a single collect()
        var nums3 = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        System.out.println(
                nums3.stream().collect(Collectors.partitioningBy(
                        n -> n % 2 == 0
                ))
        );

        // Count elements using reduce
        var words2 = List.of("a", "bb", "ccc", "dddd");

        System.out.println(
                words2.stream().reduce(0, (a, b) -> a + 1, Integer::sum) // need the 3-arg form
        );

        // Product of all elements
         var nums4 = List.of(1,2,3,4,5);

        System.out.println(
                nums4.stream().reduce(1, (a, b) -> a * b)
        );

        System.out.println(
                nums4.stream().findFirst().orElse(0)
        );

        // sort CASE_INSENSITIVE_ORDER
        var list = List.of("banana", "Apple", "cherry");

        List<String> sorted = list.stream()
                .sorted(String.CASE_INSENSITIVE_ORDER)
                .toList();

        System.out.println(sorted);
    }
}
