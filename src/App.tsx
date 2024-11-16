import React from 'react';
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App() {
  return (
  <>
    <Header />
    <div>
      <Card 
        id={1}
        paragraph='TypeScript'
        details='TS para Frontend e Backend'
        />
      <Card 
        id={2}
        paragraph='HTML'
        details='HTML para Frontend e Backend'
        />
      <Card 
        id={3}
        paragraph='SQL'
        details='SQL para banco de dados'
        />
    </div>
    <Footer />
  </>
  );
}

export default App;