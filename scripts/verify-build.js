
#!/usr/bin/env node

/**
 * Pre-deployment verification script
 * Checks if the build is ready for deployment
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    log(`✓ ${description}`, 'green');
    return true;
  } else {
    log(`✗ ${description} - MISSING!`, 'red');
    return false;
  }
}

function checkDirectory(dirPath, description) {
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    if (files.length > 0) {
      log(`✓ ${description} (${files.length} files)`, 'green');
      return true;
    } else {
      log(`✗ ${description} - EMPTY!`, 'red');
      return false;
    }
  } else {
    log(`✗ ${description} - NOT FOUND!`, 'red');
    return false;
  }
}

function main() {
  log('\n🔍 Pre-Deployment Verification\n', 'blue');

  let allChecksPass = true;

  // Check if dist directory exists and has files
  log('📁 Checking build output...', 'yellow');
  allChecksPass = checkDirectory('./dist', 'dist folder exists with files') && allChecksPass;
  allChecksPass = checkFile('./dist/index.html', 'index.html exists in dist') && allChecksPass;
  
  if (fs.existsSync('./dist/assets')) {
    allChecksPass = checkDirectory('./dist/assets', 'assets folder exists') && allChecksPass;
  }

  // Check configuration files
  log('\n⚙️  Checking configuration files...', 'yellow');
  allChecksPass = checkFile('./package.json', 'package.json') && allChecksPass;
  
  const hasNetlify = checkFile('./netlify.toml', 'netlify.toml (Netlify config)');
  const hasVercel = checkFile('./vercel.json', 'vercel.json (Vercel config)');
  
  if (!hasNetlify && !hasVercel) {
    log('⚠️  Warning: No deployment configuration found', 'yellow');
    allChecksPass = false;
  }

  // Check package.json scripts
  log('\n📦 Checking package.json scripts...', 'yellow');
  try {
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.build) {
      log('✓ Build script exists', 'green');
    } else {
      log('✗ Build script missing!', 'red');
      allChecksPass = false;
    }

    if (packageJson.dependencies && packageJson.dependencies.react) {
      log('✓ React dependency found', 'green');
    } else {
      log('✗ React dependency missing!', 'red');
      allChecksPass = false;
    }
  } catch (error) {
    log('✗ Error reading package.json', 'red');
    allChecksPass = false;
  }

  // Check HTML file
  log('\n📄 Checking HTML...', 'yellow');
  if (fs.existsSync('./dist/index.html')) {
    const htmlContent = fs.readFileSync('./dist/index.html', 'utf8');
    
    if (htmlContent.includes('<div id="app">')) {
      log('✓ React mount point found', 'green');
    } else {
      log('⚠️  Warning: React mount point not clearly visible', 'yellow');
    }

    if (htmlContent.includes('<script')) {
      log('✓ JavaScript bundle included', 'green');
    } else {
      log('✗ JavaScript bundle not found!', 'red');
      allChecksPass = false;
    }
  }

  // Final result
  log('\n' + '='.repeat(50), 'blue');
  if (allChecksPass) {
    log('✅ All checks passed! Ready to deploy.', 'green');
    log('='.repeat(50) + '\n', 'blue');
    process.exit(0);
  } else {
    log('❌ Some checks failed. Please fix issues before deploying.', 'red');
    log('='.repeat(50) + '\n', 'blue');
    process.exit(1);
  }
}

main();
