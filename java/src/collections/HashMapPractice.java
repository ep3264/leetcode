package collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapPractice {
    public static void main(String[] args) {
        Map<Integer, String> extendedMap = Map.ofEntries(
                Map.entry(1, "Alice"),
                Map.entry(2, "Bob"),
                Map.entry(3, "Carol"),
                Map.entry(4, "Dave")
        );
        System.out.println("Extended Map: " + extendedMap);

        HashMap<String, Integer> scores = new HashMap<>();

        // Put (insert / update)
        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);
        scores.remove("Charlie");

        int score = scores.getOrDefault("Unknown", 0);  // 0

        for (Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println(entry.getKey() + " → " + entry.getValue());
        }

        String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};
        HashMap<String, Integer> freq = new HashMap<>();

        for (String word : words) {
            freq.merge(word, 1, Integer::sum);
        }

        // {apple=3, banana=2, cherry=1}
        System.out.println(freq);
    }
}
