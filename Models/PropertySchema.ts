import { z, ZodType } from 'zod';



// Define Zod schema for creation (excluding 'id')
export const PropertySchemaCreation = z.object({
  name: z.string(),
  user: z.enum(['Owner', 'Builder']),
  country: z.string(),
  Phone: z.string().optional(),
  email: z.string().optional(),
});
export const PropertyDetailsSchema = z.object({
  propertyFor: z.enum(['Sale', 'Rent']),
  propertyType: z.enum(['Residential', 'Commercial', 'Land/Plot']),
  BHKtype: z.string(),
  propertyDescription: z.string(),
});
export const PropertLocationSchema = z.object({
  buildingName: z.string(),
  Locality: z.string(),
  Landmark: z.string(),
  City: z.string(),
  Location: z.string(),
});

export const FeaturesSchema = z.object({ 
  NonVeg: z.boolean(),
  Pets: z.boolean(),
  Electricity: z.enum(['Rare/No Powercut', 'Frequent Powercut']),
  Amenities: z.array(z.string()),
});
export const PriceDetailsSchema = z.object({
  Rent: z.number().int(),
  Security: z.number().int(),
  AdditionalDetails: z.string(),
});
export const PropertyImagesSchema = z.object({
  images: z.array(z.string()),
});

// Export the Zod schema for use elsewhere
export type PropertySchemaCreationType = ZodType<typeof PropertySchemaCreation>;
