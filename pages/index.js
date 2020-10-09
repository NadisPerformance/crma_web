import Head from 'next/head'
import AdminLayout from '../components/AdminLayout'
export default function Home() {
  return (
    <AdminLayout title="Administration Compta">
      <h1 id="greeting">Welcome to the Crma Dashboard</h1>
      <style jsx>{`
        h1#greeting{
          padding:1rem;
          letter-spacing:0.5rem;
        }
      `
      }</style>
    </AdminLayout>
  )
}
