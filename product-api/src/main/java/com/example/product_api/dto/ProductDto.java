package com.example.product_api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer stock_quantity;
    private Long store_id;
    private String image_url;
    private String merchantCardNumber;
    private String cvv ;
    private Long userId;
}
