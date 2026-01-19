import { FiCheck, FiX } from 'react-icons/fi'

interface Feature {
  name: string
  tier1: boolean | string
  tier2: boolean | string
  tier3: boolean | string
}

const features: Feature[] = [
  { name: 'Missed call response', tier1: true, tier2: true, tier3: true },
  { name: 'Web form response', tier1: false, tier2: true, tier3: true },
  { name: 'Initial qualification', tier1: 'Basic', tier2: 'Advanced', tier3: 'Complete' },
  { name: 'Human escalation', tier1: 'Manual', tier2: 'Rule-based', tier3: 'Emergency only' },
  { name: '24/7 coverage', tier1: 'Text only', tier2: 'Configurable', tier3: 'Full' },
  { name: 'Follow-up sequences', tier1: false, tier2: 'Optional', tier3: 'Automatic' },
  { name: 'Staff involvement', tier1: 'High', tier2: 'Medium', tier3: 'Minimal' },
]

export default function ServiceTiers() {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FiCheck className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <FiX className="h-5 w-5 text-slate-400 mx-auto" />
      )
    }
    return <span className="text-sm text-slate-700">{value}</span>
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Choose Your Coverage Level
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Three tiers designed for different needs and comfort levels with automation.
            Most businesses start with Tier 1 or 2 and scale up as they gain confidence.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Tier 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 hover:border-primary-500 transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Tier 1
              </h3>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                Missed Call Coverage
              </p>
              <p className="text-slate-600 text-sm">
                Entry-level backup coverage for busy periods and missed calls
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>SMS response to missed calls</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Basic info capture via text</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Dashboard logging</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Works alongside existing staff</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-xs text-slate-500 mb-2">Ideal for:</p>
              <p className="text-sm text-slate-600">
                Small teams testing automation with minimal disruption
              </p>
            </div>
          </div>

          {/* Tier 2 - Featured */}
          <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-primary-600 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Tier 2
              </h3>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                Hybrid Reception
              </p>
              <p className="text-slate-600 text-sm">
                Automated first response with human oversight when needed
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>All calls and web forms handled</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Advanced qualification questions</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Configurable human escalation</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Best of both: speed + human touch</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-xs text-slate-500 mb-2">Ideal for:</p>
              <p className="text-sm text-slate-600">
                Growing teams wanting automation with quality control
              </p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 hover:border-primary-500 transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Tier 3
              </h3>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                Full AI Coverage
              </p>
              <p className="text-slate-600 text-sm">
                Complete autonomous handling with emergency escalation only
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Full autonomous qualification</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Appointment scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Automatic follow-up sequences</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>True 24/7 coverage</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-xs text-slate-500 mb-2">Ideal for:</p>
              <p className="text-sm text-slate-600">
                Established businesses ready for full automation and maximum ROI
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Tier 1
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900 bg-primary-50">
                  Tier 2
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-900">
                  Tier 3
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {feature.name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderValue(feature.tier1)}
                  </td>
                  <td className="px-6 py-4 text-center bg-primary-50/50">
                    {renderValue(feature.tier2)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {renderValue(feature.tier3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
