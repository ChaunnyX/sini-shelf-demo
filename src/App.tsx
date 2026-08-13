import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Ambient } from './components/Ambient'
import { BoxTheatre } from './components/BoxTheatre'
import { useRoute } from './lib/router'
import { StoreProvider, useStore } from './lib/store'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { Concierge, Favorites, Info, SizeHelp } from './pages/Simple'

function Screen() {
  const route = useRoute()
  const p = route.path

  if (p.startsWith('/p/')) return <Product id={decodeURIComponent(p.slice(3))} />
  if (p.startsWith('/info/')) return <Info page={p.slice(6)} />
  switch (p) {
    case '/catalog': return <Catalog route={route} />
    case '/cart': return <Cart />
    case '/fav': return <Favorites />
    case '/concierge': return <Concierge />
    case '/sizes': return <SizeHelp />
    case '/': return <Home />
    default: return <Info page={'__404'} />
  }
}

function Toast() {
  const { toast } = useStore()
  if (!toast) return null
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="lbl border border-ink bg-volt px-4 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,.8)]">{toast}</div>
    </div>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <Ambient />
      <div className="relative z-10">
        <Header />
        <main>
          <Screen />
        </main>
        <Footer />
      </div>
      <BoxTheatre />
      <Toast />
    </StoreProvider>
  )
}
