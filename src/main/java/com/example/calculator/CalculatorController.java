package com.example.calculator;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api") 
public class CalculatorController {

    @GetMapping("/add/{num1}/{num2}")
    public Double add(@PathVariable Double num1, @PathVariable Double num2) {
        return num1 + num2;
    }

    @GetMapping("/subtract/{num1}/{num2}")
    public Double subtract(@PathVariable Double num1, @PathVariable Double num2) {
        return num1 - num2;
    }

    @GetMapping("/multiply/{num1}/{num2}")
    public Double multiply(@PathVariable Double num1, @PathVariable Double num2) {
        return num1 * num2;
    }

    @GetMapping("/divide/{num1}/{num2}")
    public Double divide(@PathVariable Double num1, @PathVariable Double num2) {
        if (num2 == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed"); 
        }
        return num1 / num2;
    }
}