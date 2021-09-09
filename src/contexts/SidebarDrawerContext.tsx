import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks"
import { useRouter } from "next/router"
import { createContext, ReactNode, useContext, useEffect } from "react"

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SiderBarDrawerContextData = UseDisclosureReturn

const SiderBarDrawerContext = createContext({} as SiderBarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return(
    <SiderBarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SiderBarDrawerContext)