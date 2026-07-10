function getAllowedOrigins(): Set<string> {
  const raw = process.env.ALLOWED_ORIGINS || ""
  const origins = new Set<string>()

  for (const entry of raw.split(",")) {
    const trimmed = entry.trim()
    if (!trimmed) continue
    origins.add(normalizeOrigin(trimmed))
  }

  return origins
}

function normalizeOrigin(origin: string): string {
  return origin.replace(/\/+$/, "")
}

function extractHost(origin: string): string {
  try {
    const url = new URL(origin)
    return url.host
  } catch {
    return ""
  }
}

function isAllowedOrigin(request: Request): boolean {
  const allowedOrigins = getAllowedOrigins()

  if (allowedOrigins.size === 0) {
    return true
  }

  const originHeader = request.headers.get("origin")

  if (originHeader) {
    const normalized = normalizeOrigin(originHeader)

    if (allowedOrigins.has(normalized)) {
      return true
    }

    if (process.env.NODE_ENV !== "production") {
      console.error(`[Origin Validation] Rejected origin: ${originHeader}`)
    }

    return false
  }

  const hostHeader = request.headers.get("host")

  if (!hostHeader) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[Origin Validation] Rejected: missing both Origin and Host headers")
    }
    return false
  }

  for (const allowed of allowedOrigins) {
    const allowedHost = extractHost(allowed)
    if (allowedHost && hostHeader === allowedHost) {
      return true
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.error(`[Origin Validation] Rejected host: ${hostHeader}`)
  }

  return false
}

export { getAllowedOrigins, isAllowedOrigin }
