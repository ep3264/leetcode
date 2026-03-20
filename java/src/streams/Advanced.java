package streams;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Advanced {

    public static void main(String[] args) {
        // Partition students into two groups: those who scored 60+ (passing) and those who did not.
        record Student(String name, int score) {}
        var students = List.of(
                new Student("Alice", 82), new Student("Bob", 45),
                new Student("Carol", 91), new Student("Dave", 58),
                new Student("Eve", 39)
        );

        System.out.println(
                students.stream().collect(Collectors.partitioningBy(
                        student -> student.score > 60,
                        Collectors.mapping(Student::name, Collectors.toList())
                ))
        );

        // Collect names starting with a vowel into an unmodifiable list
        var names = List.of("Alice", "Bob", "Charlie");
        System.out.println(
                names.stream()
                        .filter(n -> "AEIOUaeiou".indexOf(n.charAt(0)) >= 0)
                        .collect(Collectors.collectingAndThen(
                        Collectors.toList(),
                        Collections::unmodifiableList
                )).toString()
        );

        //Count occurrences of each word
        var words = List.of("apple","banana","apple","cherry","banana","apple");
        System.out.println(
                words.stream().collect(Collectors.groupingBy(
                      w -> w,
                      Collectors.counting()
                ))
        );
        //  Collect all leading even numbers, stopping at the first odd one.
        //  Then separately collect everything after (and including) the first odd one.

        var nums = List.of(2, 4, 6, 7, 8, 10, 12);

        System.out.println(
                nums.stream().takeWhile(n -> n % 2 == 0).collect(Collectors.toList())
        );
        System.out.println(
                nums.stream().dropWhile(n -> n % 2 == 0).collect(Collectors.toList())
        );

        // Generate Fibonacci numbers

        System.out.println(
                Stream.iterate(new int[] {0, 1}, n -> new int[]{n[1], n[0] + n[1]})
                        .map(n -> n[0])
                        .limit(10).collect(Collectors.toList())
        );

        // Sort first by department (A→Z), then by name (A→Z) within the same department.
        record Employee(String dept, String name, int salary) {}
        var staff = List.of(
                new Employee("Eng","Charlie",90000),
                new Employee("HR","Alice",70000),
                new Employee("Eng","Alice",85000),
                new Employee("HR","Bob",72000)
        );

        System.out.println(
            staff.stream().sorted(
                    Comparator.comparing(Employee::dept)
                            .thenComparing(Employee::name)
            ).collect(Collectors.toList())
        );

        // Generate a multiplication table

        System.out.println(
                IntStream.rangeClosed(1, 3)
                        .boxed()
                        .flatMap(
                        i -> IntStream.rangeClosed(1, 3).mapToObj(i2 -> i +"x" + i2 + "=" + (i * i2))
                ).collect(Collectors.toList())

        );


    }
}
