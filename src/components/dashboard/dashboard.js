import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const sentimentData = [
    { month: 'Ene', positivos: 65, negativos: 12, neutros: 23 },
    { month: 'Feb', positivos: 72, negativos: 8, neutros: 20 },
    { month: 'Mar', positivos: 68, negativos: 15, neutros: 17 },
    // Más datos aquí...
  ];

  return (
    <div className="w-full p-4 space-y-4">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="detailed">Detalle</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Tendencia de Sentimientos</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart width={400} height={300} data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="positivos" stroke="#4CAF50" />
                  <Line type="monotone" dataKey="negativos" stroke="#f44336" />
                  <Line type="monotone" dataKey="neutros" stroke="#9e9e9e" />
                </LineChart>
              </CardContent>
            </Card>
            
            {/* Más cards con diferentes métricas */}
          </div>
        </TabsContent>
        
        <TabsContent value="detailed">
          {/* Contenido detallado */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;