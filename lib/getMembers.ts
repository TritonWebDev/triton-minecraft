interface Member {
    name: string | null;
    grad_year: number | null;
    major: string | null;
    role: string | null;
    picture: string | null;
}

const ID = "2PACX-1vSKpGYcmsy_UW8P5D1_KkU774Kvgbo5ZVXcssnddf2cCVa9_Gtap6UuxR6L1EgcprubL17Z9Kt84LoV";


function parseCSV(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField.trim());
      currentField = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentField.trim());
      if (currentRow.length > 0 && currentRow.some(cell => cell !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    if (currentRow.length > 0 && currentRow.some(cell => cell !== '')) {
      rows.push(currentRow);
    }
  }

  return rows;
}

function convertGoogleDriveUrl(url: string | null): string | null {
  if (!url) return null;
  
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}=w640`;
  }
  return url;
}

export async function getMembers(): Promise<Member[]> {
  const url = `https://docs.google.com/spreadsheets/d/e/${ID}/pub?output=csv&gid=0`;

  const res = await fetch(url, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Google Sheet. Code ${res.status}`);
  }

  const csvText = await res.text();
  const rows = parseCSV(csvText);

  if (rows.length < 2) {
    return [];
  }

  const [header, ...dataRows] = rows;

  const idx: Record<string, number> = {};
  header.forEach((h, i) => {
    idx[h.toLowerCase().trim()] = i;
  });

  const required = ["name", "grad_year", "major", "role"];
  for (const col of required) {
    if (!(col in idx)) {
      throw new Error(`Missing required column: ${col}`);
    }
  }

  return dataRows.map(row => ({
    name: row[idx.name] ?? null,
    grad_year: row[idx.grad_year]
      ? Number(row[idx.grad_year])
      : null,
    major: row[idx.major] ?? null,
    role: row[idx.role] ?? null,
    picture: convertGoogleDriveUrl(row[idx.picture] ?? null)
  }));
}
