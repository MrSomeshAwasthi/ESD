package com.example.demo2.restservicecors;//package com.example.demo2.restservicecors;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@SpringBootApplication
//public class RestServiceCorsApplication {
//    public static void main(String[] args) {
//        SpringApplication.run(RestServiceCorsApplication.class, args);
//    }
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/").allowedOrigins("http://localhost:3000");
//            }
//        };
//    }
//
//}


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // Allow all origins (you can specify specific origins here)
                .allowedMethods("*"); // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    }
}
