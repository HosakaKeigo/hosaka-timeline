import { createFileRoute } from '@tanstack/react-router'
import CareerTimeline from '../components/CareerTimeline'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return <CareerTimeline />
}
