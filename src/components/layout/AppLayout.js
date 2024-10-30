import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Settings, BarChart3, MessageCircle } from 'lucide-react';

const AppLayout = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                Review Manager
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* Profile dropdown irá aquí */}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
          <div className="bg-white p-2 rounded-lg shadow">
            <TabsList className="grid grid-cols-4 gap-4">
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Inicio
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Reseñas
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Análisis
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Configuración
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Panel de Control</h2>
              {/* Contenido del dashboard */}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Gestión de Reseñas</h2>
              {/* Lista de reseñas */}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Análisis y Estadísticas</h2>
              {/* Gráficos y estadísticas */}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Configuración</h2>
              {/* Formulario de configuración */}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AppLayout;