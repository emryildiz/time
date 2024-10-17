import React, { createContext, useState } from 'react';

// Context oluşturuyoruz
export const TimeframeContext = createContext();

// Context sağlayıcı (provider) bileşeni
export const TimeframeProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState('weekly'); // Varsayılan olarak 'weekly'

  return (
    <TimeframeContext.Provider value={{ timeframe, setTimeframe }}>
      {children}
    </TimeframeContext.Provider>
  );
};