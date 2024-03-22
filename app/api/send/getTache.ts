import React from 'react'
import { NextApiRequest, NextApiResponse } from 'next';



export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // Vous pouvez ajouter ici la logique pour obtenir les données nécessaires.
      const data = { message: 'Ceci est une réponse de l\'API GET.' };

      res.status(200).json(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      res.status(500).json({ error: 'Erreur serveur interne' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}

