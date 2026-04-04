package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }
    
    @SuppressWarnings("deprecation")
	public Student getStudentById(int id) {
    	return repository.getById(id);
    }

    // UPDATE
    public Student updateStudent(int id, Student student) {
        Optional<Student> existingStudent = repository.findById(id);

        if (existingStudent.isPresent()) {
            Student updatedStudent = existingStudent.get();
            updatedStudent.setName(student.getName());
            updatedStudent.setEmail(student.getEmail());
            return repository.save(updatedStudent);
        } else {
            return null; // you can also throw exception here
        }
    }

    // DELETE
    public String deleteStudent(int id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return "Student deleted successfully";
        } else {
            return "Student not found";
        }
    }
}