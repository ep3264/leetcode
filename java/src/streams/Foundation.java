package streams;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Foundation {
    public static void main(String[] args) {
        // Keep only even numbers
        List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8);
        System.out.println(nums.stream().filter(n -> n % 2 == 0).collect(Collectors.toList()));

        // Convert strings to uppercase
        List<String> words = List.of("hello", "world", "java");
        System.out.println(words.stream().map(s -> s.toUpperCase()).collect(Collectors.toList()));

        // Count words longer than 4 chars
        List<String> words2 = List.of("cat", "stream", "map", "filter", "hi");
        System.out.println(words2.stream().filter(s -> s.length() > 4).count());

        // Print each element
        List names = List.of("Alice", "Bob", "Carol");
        names.stream().forEach(System.out::print);
        System.out.println();
        // Sort a list of integers
        List<Integer> nums2 = List.of(5, 1, 4, 2, 3);
        System.out.println(
                nums2.stream()
                        .sorted().collect(Collectors.toList()))
        ;

        // Names of adults only
        record Person(String name, int age) {}
        List<Person> people = List.of(
                new Person("Alice", 30),
                new Person("Bob", 17),
                new Person("Carol", 25)
        );

        var r = people.stream()
                .filter(p -> p.age() > 18)
                .map(Person::name).collect(Collectors.toList());
        System.out.println(r);

        // Sum a list of integers
        List<Integer> nums3 = List.of(1, 2, 3, 4, 5);
        System.out.println(
                nums3.stream().reduce(0, (a, b) -> a + b)  // or .reduce(0, Integer::sum);
                        .intValue()
        );
        // Unique sorted values
        List nums4 = List.of(3, 1, 4, 1, 5, 9, 2, 6, 5, 3);
        System.out.println(
                nums4.stream().distinct().sorted().collect(Collectors.toList())
        );
        //  Flatten a list of lists
        var groups = List.of(
                List.of("a","b"), List.of("c"), List.of("d","e","f")
        );
        System.out.println(
                groups.stream()
                        .flatMap(l -> l.stream()) // or  .flatMap(Collection::stream)
                        .collect(Collectors.toList())
        );
        // Join strings with a separator
        var tags = List.of("java", "streams", "functional");
        System.out.println(
                tags.stream().collect(Collectors.joining(" | "))
        );
        // Check if all scores are above 60, and if any score is above 90.
        var scores = List.of(72, 88, 91, 65, 79);
        System.out.println(
                scores.stream().allMatch(s -> s > 60) + " " +
                        scores.stream().anyMatch(s -> s > 90)

        );

        // Group words by first letter
        var words3 = List.of("apple","avocado","banana","blueberry","cherry");

        System.out.println(
                words3.stream().collect(Collectors.groupingBy(
                    s -> s.charAt(0)
                ))
        );
        // Produce a Map mapping each name to its length.
        var names2 = List.of("Alice", "Bob", "Charlie");

        System.out.println(
            names2.stream().collect(Collectors.toMap(
                    s -> s,
                    s -> s.length() //or String::length
            ))
        );

        // Sort products by price from highest to lowest.
        record Product(String name, double price) {}
        var items = List.of(
                new Product("Pen", 1.5),
                new Product("Notebook", 4.0),
                new Product("Bag", 12.99)
        );
        System.out.println(
                items.stream()
                        .sorted(
                                Comparator.comparingDouble(Product::price).reversed()
                        ).collect(Collectors.toList())

        );
        // Find the min, max, and average salary in one pass.
        record Employee(String name, int salary) {}
        var staff = List.of(
                new Employee("A", 60000),
                new Employee("B", 85000),
                new Employee("C", 72000)
        );
        System.out.println(
                staff.stream().mapToInt(Employee::salary).summaryStatistics()
        );

    }
}
