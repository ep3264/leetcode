package collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparableAndComparator {
    public static void main(String[] args) {
        List<Employee> list = List.of(
                new Employee("John", 3000),
                new Employee("Anna", 2000),
                new Employee("Mike", 4000)
        );

        List<Employee> sorted = new ArrayList<>(list);
        Collections.sort(sorted);
        Collections.sort(list, new NameComparator());
        list.sort(Comparator.comparing(e -> e.name));
        list.sort((e1, e2) -> e1.name.compareTo(e2.name));
    }


}
class NameComparator implements Comparator<Employee> {

    @Override
    public int compare(Employee e1, Employee e2) {
        return e1.name.compareTo(e2.name);
    }
}

class Employee implements Comparable<Employee> {
    String name;
    int salary;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public int compareTo(Employee other) {
        return Integer.compare(this.salary, other.salary);
    }
}