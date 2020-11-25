import resolve from 'resolve'
import path from 'path'

export function resolveRequest(req: string, issuer: string): string {
  const basedir =
    issuer.endsWith(path.posix.sep) || issuer.endsWith(path.win32.sep)
      ? issuer
      : path.dirname(issuer)
  return resolve.sync(req, { basedir })
}
