import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.$queryRawUnsafe(`
    WITH Temp as (
      SELECT * FROM SomeTable
    )
    SELECT * FROM Temp;
  `)
  console.log(result)
}

main()
