import 'dotenv/config'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../src/generated/prisma/client'

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
})

const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Isi Landing Content
  await prisma.landingContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      heroTitle: "PERMIKOMNASI WILAYAH V",
      heroSubtitle: "Persatuan Mahasiswa Informatika dan Komputer Nasional",
      heroImage: "https://via.placeholder.com/1200x600",
      greetingName: "Budi Santoso",
      greetingPosition: "Ketua Wilayah",
      greetingMessage: "Selamat datang di website kami...",
      greetingPhoto: "https://via.placeholder.com/300",
    },
  })

  // 2. Isi Partner (Contoh 2 biji)
  await prisma.partner.createMany({
    data: [
      { name: "Google", logo: "https://via.placeholder.com/150" },
      { name: "Microsoft", logo: "https://via.placeholder.com/150" },
    ],
    skipDuplicates: true,
  })

  // 3. Isi Member
  await prisma.member.createMany({
    data: [
      { name: "HMIF", university: "AMIKOM", logo: "https://via.placeholder.com/100" },
    ],
    skipDuplicates: true,
  })
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })