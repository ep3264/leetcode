package collections;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class TreeMapPractice {
    public static void main(String[] args) {

        TreeMap<Integer, String> map = new TreeMap<>();
        map.put(5, "e");
        map.put(1, "a");
        map.put(3, "c");
        System.out.println(map.firstKey()); // 1
        System.out.println(map.lastKey()); // 5
        System.out.println(map.floorKey(4)); // 3
        System.out.println(map.ceilingKey(4)); // 5
        System.out.println(map.higherKey(3)); // > 3 = 5 strictly greater
        System.out.println(map.lowerKey(3)); // < 3 = 1
        System.out.println(map.subMap(1, 5));  // 1, 3  inclusive on from, exclusive on to
        System.out.println(map.headMap(4)); // < 4 all keys = 1, 3
        System.out.println(map.tailMap(3)); // >= 3 = 3, 5
        Map.Entry<Integer, String> e = map.pollFirstEntry();
        System.out.println(e + " | " + map); // 1=a | {3=c, 5=e}
        map.put(1, "a");
        System.out.println(map.descendingKeySet()); // [5, 3, 1]
        System.out.println(map.descendingMap());

        // Word frequency in sorted order
        String[] words = {"apple", "banana", "apple", "cherry", "banana", "apple"};

        var m = Arrays.stream(words).collect(Collectors.toMap(
                w -> w,
                k -> 1,
                Integer::sum,
                TreeMap::new
        ));

        System.out.println(
                m
        );

        TreeMap<Integer, String> prices = new TreeMap<>();
        prices.put(10, "pen");
        prices.put(25, "notebook");
        prices.put(50, "backpack");
        prices.put(100, "headphones");

        int budget = 40;
        System.out.println(prices.floorEntry(budget).getValue());

        TreeMap<Integer, String> schedule = new TreeMap<>();
        schedule.put(8, "breakfast");
        schedule.put(9, "standup");
        schedule.put(12, "lunch");
        schedule.put(17, "review");
        schedule.put(20, "dinner");

        schedule.subMap(9, true, 17, true)
                .forEach((hour, event) ->
                        System.out.println(hour + ":00 - " + event));


        // Top-N expensive products
        TreeMap<Integer, String> products = new TreeMap<>();
        products.put(10, "pen");
        products.put(250, "keyboard");
        products.put(800, "monitor");
        products.put(50, "mouse");
        products.put(1200, "laptop");


        int n = 3, count = 0;
        for (Integer price : products.descendingKeySet()) {
            if (count++ == n) break;
            System.out.println(products.get(price));
        }
        // or
        for (int i = 0; products.size() != 0 && i < 3; i++) {
            System.out.println(
                    products.pollLastEntry()
            );
        }

        Integer[] scores = {95, 82, 73, 60, 91, 85, 70};
        TreeMap<Integer, String> graded = new TreeMap<>();
        for (int s : scores) {
            String grade = s >= 90 ? "A"
                    : s >= 80 ? "B"
                    : s >= 70 ? "C" : "F";
            graded.put(s, grade);
        }
        graded.forEach((score, g) ->
                System.out.println(score + "=> " + g));


        TreeMap<Integer, String> tasks = new TreeMap<>();
        tasks.put(3, "send email");
        tasks.put(10, "fix prod bug");
        tasks.put(1, "update docs");
        tasks.put(7, "code review");

        while (!tasks.isEmpty()) {

            System.out.println(tasks.pollLastEntry());
        }

    }

}
