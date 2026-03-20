package streams;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Expert {
    public static void main(String[] args) {
        // Produce a Map> giving the highest-paid employee in each department.
        record Employee(String name, String dept, int salary) {
        }
        List staff = List.of(
                new Employee("Alice", "Eng", 95000),
                new Employee("Bob", "Eng", 88000),
                new Employee("Carol", "HR", 72000),
                new Employee("Dave", "HR", 80000),
                new Employee("Eve", "Finance", 91000)
        );

        System.out.println(
                staff.stream().collect(
                        Collectors.groupingBy(
                                Employee::dept,
                                Collectors.collectingAndThen(
                                        Collectors.maxBy(Comparator.comparing(Employee::salary)),
                                        o -> o.map(e -> e.name + "/" + e.salary).orElse(null)
                                )
                        )
                )

        );

        // Build a Map counting occurrences using toMap(), providing a merge function for duplicate keys.
        var items = List.of("apple", "banana", "apple", "cherry", "banana", "apple");

        System.out.println(
                items.stream().collect(Collectors.toMap(
                                s -> s,
                                s -> 1,
                                Integer::sum // collision
                        )
                )
        );

        // Collect a sorted list of all unique skills present in the team.
        record Developer(String name, List<String> skills) {
        }
        var team = List.of(
                new Developer("Alice", List.of("Java", "SQL", "Docker")),
                new Developer("Bob", List.of("Java", "Kotlin", "Docker")),
                new Developer("Carol", List.of("SQL", "Python", "Java"))
        );

        System.out.println(
                team.stream().flatMap(d -> d.skills.stream())
                        .distinct()
                        .sorted(Comparator.comparing(s -> s.toLowerCase().charAt(s.length() - 1)))
                        .collect(Collectors.toList())
        );

        // Use reduce() — no Comparator, no max() — to find the longest word.
        var words = List.of("sky", "infrastructure", "map", "orchestration", "api");

        System.out.println(
                words.stream().reduce("", (a, b) -> a.length() > b.length() ? a : b)
        );

        // Compute count, sum, min, max, and average of order amounts in a single collect() call.
        record Order(String id, int amount) {
        }
        var orders = List.of(
                new Order("A1", 120), new Order("A2", 450),
                new Order("A3", 85), new Order("A4", 300)
        );
        System.out.println(orders.stream()
                .collect(Collectors.summarizingInt(Order::amount))
        );

        // Build a Map> giving total quantity sold per product per region.
        record Sale(String region, String product, int qty) {
        }
        var sales = List.of(
                new Sale("North", "Widget", 10), new Sale("North", "Gadget", 5),
                new Sale("South", "Widget", 7), new Sale("South", "Widget", 3),
                new Sale("North", "Widget", 4)
        );

        System.out.println(
                sales.stream().collect(Collectors.groupingBy(
                        Sale::region,
                        Collectors.groupingBy(
                                Sale::product,
                                Collectors.summingInt(Sale::qty)
                        )
                ))
        );

        // Count word frequencies in parallel. Explain why a plain HashMap would be unsafe and show the correct approach.
        var words2 = List.of("a", "b", "a", "c", "b", "a", "d", "c");

        System.out.println(
                words2.parallelStream().collect(Collectors.groupingByConcurrent(
                        w -> w,
                        Collectors.counting()
                ))
        );

        // Write a custom Collector using Collector.of() that collects integers into a comma-separated string,
        // but only for even numbers — without using filter() before collect().
        var nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        System.out.println(
                nums.stream().collect(Collector.of(
                        StringBuilder::new, // init
                        (sb, i) -> { // accumulate
                            if (i % 2 != 0)
                                return;
                            if (sb.length() > 0)
                                sb.append(", ");
                            sb.append(i);
                        },
                        (sb, sb2) -> { // merge (parallel streams)
                            if (sb.length() > 0 && sb2.length() > 0)
                                sb.append(" ,");

                            sb.append(sb2);
                            return sb;
                        },
                        StringBuilder::toString //result

                ))
        );
    }
}
