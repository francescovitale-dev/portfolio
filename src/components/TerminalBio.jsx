import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TerminalBio = () => {
  const [text, setText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    { cmd: '> whoami', 
      response: 'Francesco Vitale - Full Stack Developer & Tech Entrepreneur' },
    { cmd: '> cat mission.txt', 
      response: 'Building innovative solutions that bridge technology and real-world impact' },
    { cmd: '> ./display_passions.sh', 
      response: '["Software Architecture", "Product Design", "Entrepreneurship", "Innovation"]' },
    { cmd: '> git status', 
      response: 'Currently working on next-gen web applications\nExploring AI integrations\nOpen to exciting collaborations' }
  ];

  useEffect(() => {
    if (currentCommand < commands.length) {
      let charIndex = 0;
      const command = commands[currentCommand];
      const fullText = command.cmd + '\n' + command.response + '\n\n';
      
      const typing = setInterval(() => {
        setText(prev => prev + fullText[charIndex]);
        charIndex++;
        
        if (charIndex === fullText.length) {
          clearInterval(typing);
          setTimeout(() => setCurrentCommand(c => c + 1), 500);
        }
      }, 30);

      return () => clearInterval(typing);
    }
  }, [currentCommand]);

  return (
    <Card className="bg-black/90">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-green-500">terminal</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div 
          className="font-mono text-green-500 whitespace-pre-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {text}
          <span className="animate-pulse">▋</span>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default TerminalBio;