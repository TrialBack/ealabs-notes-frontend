'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, FolderOpen, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet' // SheetTitle eklendi
import { Separator } from '@/components/ui/separator'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  // Sidebar içeriği (hem mobil hem desktop için ortak)
  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-4">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <FolderOpen className="h-6 w-6" />
          <span className="">EA Notes</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* İleride buraya FolderTree bileşeni gelecek */}
            <div className="px-3 py-2 text-muted-foreground text-xs uppercase">Klasörler</div>
            <div className="px-3 py-10 border border-dashed rounded-md m-2 text-center text-muted-foreground">
                Folder Tree Alanı
            </div>
        </nav>
      </div>
      
      <div className="mt-auto p-4">
          <Separator className="my-4" />
          <div className="flex flex-col gap-2">
             <Button variant="ghost" className="justify-start gap-2 w-full">
                <Settings className="h-4 w-4" /> Ayarlar
             </Button>
             <Button variant="ghost" className="justify-start gap-2 w-full text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4" /> Çıkış Yap
             </Button>
          </div>
      </div>
    </div>
  )

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      
      {/* Desktop Sidebar (Hidden on mobile) */}
      <div className="hidden border-r bg-muted/40 md:block h-screen sticky top-0 overflow-y-auto">
        <SidebarContent />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col">
        {/* Mobile Header */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0 w-[240px]">
              {/* --- DÜZELTME BURADA --- */}
              {/* Erişilebilirlik için başlık zorunlu. sr-only ile gizledik. */}
              <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>
              <SidebarContent />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <span className="font-semibold">Mobil Görünüm</span>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}