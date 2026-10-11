import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Layers, CheckCircle2, Shield, Copy, Check } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export const InteractiveTerminal = () => {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'containers' | 'kubernetes'
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Premkumar Cloud Terminal v2.5.0 [Linux 6.8.0-generic x86_64]'
    },
    {
      type: 'system',
      text: 'Type "help" or click one of the quick command buttons below.'
    },
    {
      type: 'command',
      cmd: 'whoami'
    },
    {
      type: 'output',
      lines: terminalCommands.whoami
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, activeTab]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputValue('');
      return;
    }

    const newHistory = [
      ...history,
      { type: 'command', cmd: trimmed }
    ];

    if (terminalCommands[trimmed]) {
      newHistory.push({
        type: 'output',
        lines: terminalCommands[trimmed]
      });
    } else if (trimmed === 'cat resume' || trimmed === 'resume') {
      newHistory.push({
        type: 'output',
        lines: [
          'Premkumar Asode - Resume Preview:',
          '• Role: Aspiring DevOps Engineer | Java Full Stack Developer',
          '• Education: B.E. in ECE (Government Eng College, VTU 2025)',
          '• Skills: Java, Spring Boot, Jenkins, Docker, K8s, AWS, Terraform',
          '• Local PDF: /Premkumar_Asode_Resume.pdf'
        ]
      });
    } else {
      newHistory.push({
        type: 'error',
        lines: [
          `bash: command not found: ${trimmed}`,
          'Try running "help" to see all valid commands.'
        ]
      });
    }

    setHistory(newHistory);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputValue);
    }
  };

  const handleCopyLogs = () => {
    const text = history
      .map((item) => {
        if (item.type === 'command') return `$ ${item.cmd}`;
        if (item.type === 'output' || item.type === 'error') return item.lines.join('\n');
        return item.text;
      })
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/90 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl flex flex-col font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          {/* Traffic dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-600/50"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50"></span>
          </div>
          <span className="text-slate-400 font-medium text-[11px] sm:text-xs flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            premkumar@devops-box:~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 text-[10px]">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'terminal'
                ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Terminal
          </button>
          <button
            onClick={() => setActiveTab('containers')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'containers'
                ? 'bg-purple-500/20 text-purple-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Docker
          </button>
          <button
            onClick={() => setActiveTab('kubernetes')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'kubernetes'
                ? 'bg-blue-500/20 text-blue-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            K8s
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLogs}
            title="Copy terminal session"
            className="text-slate-400 hover:text-cyan-300 p-1 rounded hover:bg-slate-800 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-72 sm:h-80 overflow-y-auto space-y-2 select-text text-slate-300 leading-relaxed scrollbar-thin">
        {activeTab === 'terminal' && (
          <>
            {history.map((item, idx) => {
              if (item.type === 'system') {
                return (
                  <div key={idx} className="text-slate-400 italic">
                    {item.text}
                  </div>
                );
              }
              if (item.type === 'command') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-cyan-400 font-semibold pt-1">
                    <span className="text-emerald-400">user@premkumar:~$</span>
                    <span>{item.cmd}</span>
                  </div>
                );
              }
              if (item.type === 'error') {
                return (
                  <div key={idx} className="text-rose-400 pl-4 border-l-2 border-rose-500/50 space-y-0.5">
                    {item.lines.map((line, lIdx) => (
                      <div key={lIdx}>{line}</div>
                    ))}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-slate-300 pl-4 border-l-2 border-cyan-500/30 space-y-0.5">
                  {item.lines.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>
              );
            })}

            {/* Current Input Line */}
            <div className="flex items-center gap-2 pt-2 text-slate-200">
              <span className="text-emerald-400 font-semibold shrink-0">user@premkumar:~$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. skills, projects, pipeline, help)..."
                className="bg-transparent border-none outline-none text-slate-100 w-full placeholder:text-slate-600 focus:ring-0 text-xs font-mono"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </>
        )}

        {activeTab === 'containers' && (
          <div className="space-y-3">
            <div className="text-cyan-400 font-semibold">$ docker ps --format "table {'{{.Names}}\t{{.Status}}\t{{.Ports}}'}"</div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center text-emerald-400 font-medium">
                  <span>booknest-backend-v1</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Up 14 hours (healthy)</span>
                </div>
                <div className="text-slate-400 text-[11px] mt-1">Image: eclipse-temurin:17 | Ports: 0.0.0.0:8080-&gt;8080/tcp</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center text-cyan-400 font-medium">
                  <span>nginx-reverse-proxy</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Up 14 hours</span>
                </div>
                <div className="text-slate-400 text-[11px] mt-1">Image: nginx:alpine | Ports: 0.0.0.0:80-&gt;80/tcp, 443-&gt;443/tcp</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between items-center text-purple-400 font-medium">
                  <span>mysql-database-service</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Up 14 hours (healthy)</span>
                </div>
                <div className="text-slate-400 text-[11px] mt-1">Image: mysql:8.0 | Volume: /var/lib/mysql persistent</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'kubernetes' && (
          <div className="space-y-3">
            <div className="text-cyan-400 font-semibold">$ kubectl get pods,svc -n production</div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-indigo-400 font-medium">NAME: pod/spring-api-deployment-78dfb9f-xk89</div>
                <div className="flex items-center gap-3 text-slate-400 text-[11px] mt-1">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready: 1/1
                  </span>
                  <span>Status: Running</span>
                  <span>Restarts: 0</span>
                  <span>Age: 4d</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-indigo-400 font-medium">NAME: pod/spring-api-deployment-78dfb9f-mv42</div>
                <div className="flex items-center gap-3 text-slate-400 text-[11px] mt-1">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Ready: 1/1
                  </span>
                  <span>Status: Running</span>
                  <span>Restarts: 0</span>
                  <span>Age: 4d</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-blue-400 font-medium">NAME: service/spring-api-clusterip</div>
                <div className="text-slate-400 text-[11px] mt-1">Type: ClusterIP | Cluster-IP: 10.96.12.84 | Port: 8080/TCP</div>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="bg-slate-900/80 px-3 py-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5 select-none">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider mr-1">Quick Run:</span>
        {['whoami', 'skills', 'projects', 'pipeline', 'education', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 text-[11px] transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
