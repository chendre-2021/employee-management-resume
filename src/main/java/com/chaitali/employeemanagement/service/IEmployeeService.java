package com.chaitali.employeemanagement.service;

import java.util.List;

import com.chaitali.employeemanagement.entity.Employee;

public interface IEmployeeService {
    Employee createEmployee(Employee employee);
    Employee getEmployeeById(Long id);
    List<Employee> getAllEmployees();
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
}