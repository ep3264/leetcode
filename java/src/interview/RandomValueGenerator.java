package interview;

import java.util.Arrays;
import java.util.Random;

public class RandomValueGenerator {
    private String[] values;
    private int[] weights;

    RandomValueGenerator(String[] values, int[] weights) {
        this.values = values;
        this.weights = weights;
    }

    // TODO:
    public String randomValue() {
        var rnd = new Random();
        var nRandomInt = rnd.nextInt() % Arrays.stream(weights).sum();

        if (nRandomInt < weights[0]) {
            return values[0];
        }

        else if (nRandomInt >= weights[0] && nRandomInt < Arrays.stream(weights).limit(2).sum()){
            return  values[1];
        }
        else  if (nRandomInt >= 126 && nRandomInt <= Arrays.stream(weights).limit(2).sum()) {
            return  values[2];
        }
        else if (nRandomInt == Arrays.stream(weights).sum() - 1) {
            return  values[3];
        }

        throw  new RuntimeException();
    }

    public static void main(String[] args) {
        String[] arrayOfValues = {"Common value", "Rare value", "Epic value", "Legendary value"};
        int[] arrayOfWeights = {100, 25, 5, 1};
        var rnd = new Random();
        var nRandomInt = Math.abs(rnd.nextInt() % 132);
        System.out.println(

                nRandomInt
        );
    }
}
