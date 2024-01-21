// src/main/java/com/example/colligifyme/controller/HomeController.java

package com.example.colligifyme.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index"; // Assuming you have an "index.html" file in the "resources/templates" folder
    }
}
