import { PropertySchemaCreationType, PropertySchemaCreation } from '../Models/PropertySchema';
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function createProperty(data: any) {
  try {
    // Validate the input data against the Zod schema
    const validatedData = PropertySchemaCreation.parse(data);

    // Perform the creation action using Prisma
    const createdProperty = await prisma.property_Schema.create({
      data: validatedData,
    });

    return createdProperty;
  } catch (error) {
    // Handle validation errors or other errors
    console.error('Error creating property:', error);
    throw new Error('Failed to create property.');
  }
}

export default createProperty;
