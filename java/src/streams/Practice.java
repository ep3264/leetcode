package streams;

import java.util.List;
import java.util.stream.Collectors;

public class Practice {
    public static void main(String[] args) {
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


    }
}
