// @ts-nocheck
// products/dto/product.dto.ts

export class ProductDto {
  readonly productID: number;
  readonly productName: string;
  readonly produtDescription: string;
  readonly frontImg?: string;
  readonly backImg?: string;
  readonly productPrice: number;
  readonly productReviews: string;
}
