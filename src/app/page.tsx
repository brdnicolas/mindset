import Card from '@/components/molecules/Card/Card'

export default function Home() {
  return (
    <div className="mt-11 ml-16">
      <h1 className="text-2xl text-[#B6B6B8] font-extrabold mb-12">Mes candidatures</h1>
      <Card companyName="Mentor Goal" jobName="Développeur Front-End" date="Aujourd'hui" />
    </div>
  )
}
