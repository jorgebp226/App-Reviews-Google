import { useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { saveUserPreferences } from '../services/api';

const PreferencesForm = () => {
  const [preference, setPreference] = useState('none');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const user = await getCurrentUser();
      await saveUserPreferences({
        responsePreference: preference,
        userId: user.userId, // Send additional user data if needed
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Ha ocurrido un error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Configuración de Respuestas</CardTitle>
        <CardDescription>
          Elige cómo quieres que respondamos a las reseñas de tu negocio
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <RadioGroup
            value={preference}
            onValueChange={setPreference}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">
                Responder a todas las reseñas
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="positive" id="positive" />
              <Label htmlFor="positive">
                Responder solo a reseñas positivas
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">
                No responder automáticamente
              </Label>
            </div>
          </RadioGroup>

          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}

          {success && (
            <div className="text-green-600 text-sm mt-2">
              Preferencias guardadas correctamente
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span className="ml-2">Guardando...</span>
              </div>
            ) : (
              'Guardar Preferencias'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PreferencesForm;
