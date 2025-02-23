# TypeScript Project - filterPersons

This project demonstrates how to filter users based on their type (`user` or `admin`) in TypeScript.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **VS Code** (Recommended, download from [code.visualstudio.com](https://code.visualstudio.com/))
- **TypeScript & ts-node**

##  Setup Instructions

### **1️⃣ Clone or Create the Project Folder**
If you haven't already created the project, do:

#### **Mac/Linux**
```sh
mkdir typescript-project
cd typescript-project
```

#### **Windows (Command Prompt)**
```sh
mkdir typescript-project
cd typescript-project
```

Or, if you're cloning a repository:

```sh
git clone <repo-url>
cd typescript-project
```

### **2️ Initialize a Node.js Project**
Run the following command to create a `package.json` file:

```sh
npm init -y
```

### **3️⃣ Install TypeScript and Required Packages**
Install TypeScript and `ts-node` to run TypeScript files:

```sh
npm install --save-dev typescript ts-node tsx @types/node
```

### **4️⃣ Create a TypeScript Configuration File (`tsconfig.json`)**
Run:

```sh
tsc --init
```

Modify the `tsconfig.json` to include:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ESNext",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### **5️⃣ Add the Code**
Create a file named `filterPersons.ts` and add your TypeScript code inside it.

### **6️⃣ Update `package.json` (Optional)**
Modify `package.json` to include a start script:

```json
"scripts": {
  "start": "tsx filterPersons.ts"
}
```

### **7️⃣ Run the Project**
To run your TypeScript file, use:

```sh
npm run start
```

Or manually run:

```sh
npx tsx filterPersons.ts
```

If using `ts-node`:

```sh
npx ts-node filterPersons.ts
```

### **8️⃣ (Optional) Compile & Run as JavaScript**
If you prefer to compile first, run:

```sh
tsc filterPersons.ts
node filterPersons.js
```

---
