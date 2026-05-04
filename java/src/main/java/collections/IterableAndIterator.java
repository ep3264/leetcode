package collections;

import java.util.Iterator;
import java.util.concurrent.atomic.AtomicInteger;

public class IterableAndIterator {
    public static void main(String[] args) {
        var range = new MyRange(1, 5);

        for (var n : range) {
            System.out.println(n);
        }
        AtomicInteger a = new AtomicInteger();
        a.compareAndSet(6, 7);
    }
}
class MyRange implements Iterable<Integer> {

    private int start;
    private int end;

    public MyRange(int start, int end) {
        this.start = start;
        this.end = end;
    }

    public Iterator<Integer> iterator() {

        return new Iterator<Integer>() {

            int current = start;

            public boolean hasNext() {
                return current <= end;
            }

            public Integer next() {
                return current++;
            }
        };
    }
}
