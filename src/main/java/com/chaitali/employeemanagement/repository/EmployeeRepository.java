package com.chaitali.employeemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chaitali.employeemanagement.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
