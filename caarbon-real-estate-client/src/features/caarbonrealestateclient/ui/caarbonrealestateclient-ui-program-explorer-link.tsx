import { CAARBONREALESTATECLIENT_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function CaarbonrealestateclientUiProgramExplorerLink() {
  return <AppExplorerLink address={CAARBONREALESTATECLIENT_PROGRAM_ADDRESS} label={ellipsify(CAARBONREALESTATECLIENT_PROGRAM_ADDRESS)} />
}
