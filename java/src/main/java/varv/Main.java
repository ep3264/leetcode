package varv;


import io.vavr.collection.List;

record Product(String name, double price, int stock) {}
record Order(String userId, java.util.List<Product> items) {}

public class Main {

    public static void main(String[] args) {

        List<Order> orders = List.of(
                new Order("alice", java.util.List.of(new Product("Keyboard", 79.99, 10))),
                new Order("bob",   java.util.List.of(new Product("Mouse",    29.99,  3))),
                new Order("alice", java.util.List.of(new Product("Monitor", 299.99,  5)))
        );

// Group by userId, get order counts per user
        orders.groupBy(Order::userId)
                .mapValues(List::size)
                .forEach((user, count) ->
                        System.out.println(user + " placed " + count + " order(s)")
                );
    }
}
