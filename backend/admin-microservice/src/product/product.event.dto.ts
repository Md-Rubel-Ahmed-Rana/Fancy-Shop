export class ProductEventDto {
  public readonly productId: string;
  public readonly seller: string;
  public readonly title: string;
  public readonly description: string;
  public readonly price: number;
  public readonly category: string;
  public readonly images: string[];
  public readonly inventory: number;
  public readonly shippingInfo: string;
  public readonly sku: string;
  public readonly tags: string[];
  public readonly condition: string;
  public readonly warrantyInfo: string;
  public readonly returnPolicy: string;
  public readonly isApproved?: boolean;
  constructor(schema: {
    seller: string;
    productId: string;
    title: string;
    description: string;
    price: number;
    category: string;
    images: string[];
    inventory: number;
    shippingInfo: string;
    sku: string;
    tags: string[];
    condition: string;
    warrantyInfo: string;
    returnPolicy: string;
    isApproved?: boolean;
  }) {
    this.seller = schema.seller;
    this.productId = schema.productId;
    this.title = schema.title;
    this.description = schema.description;
    this.price = schema.price;
    this.category = schema.category;
    this.images = schema.images;
    this.inventory = schema.inventory;
    this.shippingInfo = schema.shippingInfo;
    this.sku = schema.sku;
    this.tags = schema.tags;
    this.condition = schema.condition;
    this.warrantyInfo = schema.warrantyInfo;
    this.returnPolicy = schema.returnPolicy;
    this.isApproved = schema.isApproved;
  }

  toString() {
    return JSON.stringify({
      productId: this.productId,
      seller: this.seller,
      title: this.title,
      description: this.description,
      price: this.price,
      category: this.category,
      images: this.images,
      inventory: this.inventory,
      shippingInfo: this.shippingInfo,
      sku: this.sku,
      tags: this.tags,
      condition: this.condition,
      warrantyInfo: this.warrantyInfo,
      returnPolicy: this.returnPolicy,
    });
  }
}
