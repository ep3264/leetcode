package interview;

import java.util.Arrays;
import java.util.Random;
import java.util.TreeMap;

/**
 * Please create the class with a constructor, which takes 2 parameters: array of values and array of weights.
 * Please create a method in this class, which gives a random value based on weights.
 * Output some results.
 */
public class RandomValueGenerator {
    private String[] values;
    private int[] weights;
    private int totalWeights;
    private TreeMap<Integer, String> valuesByWeights = new TreeMap<>();
    private final Random rnd = new Random();

    RandomValueGenerator(String[] values, int[] weights) {
        this.values = values;
        this.weights = weights;
        this.totalWeights = Arrays.stream(weights).sum();

        int cumulative = 0;
        for (int i = 0; i < weights.length; i++) {
            cumulative += weights[i];
            valuesByWeights.put(cumulative, values[i]);
        }

        System.out.println(valuesByWeights);
    }

    public String randomValue() {
        var nRandomInt = rnd.nextInt(totalWeights) + 1;
        System.out.println(
                "nRandomInt = " +
                nRandomInt
        );
        return valuesByWeights.ceilingEntry(nRandomInt).getValue();
    }

    public static void main(String[] args) {
        String[] arrayOfValues = {"Common value", "Rare value", "Epic value", "Legendary value"};
        int[] arrayOfWeights = {100, 25, 5, 1};

        var generator = new RandomValueGenerator(arrayOfValues, arrayOfWeights);
        System.out.println(
                generator.randomValue()
        );
        System.out.println(
                generator.randomValue()
        );
        System.out.println(
                generator.randomValue()
        );
    }
}
