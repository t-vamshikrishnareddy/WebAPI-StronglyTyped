﻿#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$arguments = "/site:DemoWebApi /apppool:Clr4IntegratedAppPool /config:$PSScriptRoot\.vs\config\applicationhost.config"
echo $arguments
$processInfo = New-Object System.Diagnostics.ProcessStartInfo("C:\Program Files (x86)\IIS Express\iisexpress.exe", $arguments)
$process = [System.Diagnostics.Process]::Start($processInfo)
Invoke-RestMethod http://localhost:10965/api/codegen -Method POST -InFile "$($PSScriptRoot)\DemoWebApi\CodeGen.json" -ContentType "application/json"
$process.CloseMainWindow()
