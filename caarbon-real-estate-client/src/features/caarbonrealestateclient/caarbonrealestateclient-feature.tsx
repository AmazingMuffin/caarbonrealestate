import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { CaarbonrealestateclientUiProgramExplorerLink } from './ui/caarbonrealestateclient-ui-program-explorer-link'
import { CaarbonrealestateclientUiCreate } from './ui/caarbonrealestateclient-ui-create'
import { CaarbonrealestateclientUiProgram } from '@/features/caarbonrealestateclient/ui/caarbonrealestateclient-ui-program'

export default function CaarbonrealestateclientFeature() {
  const { account } = useSolana()

  if (!account) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="hero py-[64px]">
          <div className="hero-content text-center">
            <WalletDropdown />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <AppHero title="Caarbonrealestateclient" subtitle={'Run the program by clicking the "Run program" button.'}>
        <p className="mb-6">
          <CaarbonrealestateclientUiProgramExplorerLink />
        </p>
        <CaarbonrealestateclientUiCreate account={account} />
      </AppHero>
      <CaarbonrealestateclientUiProgram />
    </div>
  )
}
