@echo off
title Ayush Gupta Portfolio - Live Server
echo Starting Live Server for Ayush Gupta Portfolio (Roll: 202510101240165)...
echo Opening http://localhost:5500 in your browser...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$port = 5500; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add(\"http://localhost:$port/\"); try { $listener.Start() } catch { Write-Host 'Port in use or permission issue. Opening index.html directly...'; Start-Process 'index.html'; exit }; Write-Host \"Live Server running at http://localhost:$port/ (Press Ctrl+C to stop)\"; Start-Process \"http://localhost:$port/\"; while ($listener.IsListening) { $ctx = $listener.GetContext(); $req = $ctx.Request; $res = $ctx.Response; $rel = '.' + $req.RawUrl.Split('?')[0]; if ($rel -eq './') { $rel = './index.html' }; if (Test-Path $rel) { $bytes = [System.IO.File]::ReadAllBytes($rel); $ext = [System.IO.Path]::GetExtension($rel).ToLower(); $ct = switch ($ext) { '.html' { 'text/html' } '.css' { 'text/css' } '.js' { 'application/javascript' } '.jpg' { 'image/jpeg' } '.png' { 'image/png' } default { 'application/octet-stream' } }; $res.ContentType = $ct; $res.ContentLength64 = $bytes.Length; $res.OutputStream.Write($bytes, 0, $bytes.Length) } else { $res.StatusCode = 404 }; $res.Close() }"
pause

