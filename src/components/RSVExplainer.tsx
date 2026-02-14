import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Warning, FirstAid, Info, TrendUp, Baby, Hospital, ShieldCheck } from '@phosphor-icons/react'
import { Progress } from '@/components/ui/progress'

export function RSVExplainer() {
  return (
    <div className="clinical-container space-y-6 card-padding md:card-padding card-padding-mobile">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Baby size={36} weight="duotone" className="text-primary" />
          <h1 className="text-3xl font-semibold">RSV in Newborns: Understanding the Risk</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Respiratory Syncytial Virus (RSV) and evidence-based information for protecting your infant
        </p>
      </div>

      <Alert className="border-caution bg-caution/10">
        <Warning size={20} weight="fill" className="text-caution" />
        <AlertTitle>Why RSV Matters for Newborns</AlertTitle>
        <AlertDescription className="ml-2">
          RSV is the <strong>leading cause of hospitalization</strong> for infants under 1 year in the United States. While most children recover, young infants—especially those under 6 months—face the highest risk of severe complications requiring hospital care.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>What is RSV?</CardTitle>
          <CardDescription>
            A common respiratory virus with serious implications for young infants
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Respiratory Syncytial Virus (RSV)</strong> is a highly contagious virus that infects the respiratory tract. Nearly all children are infected with RSV by age 2. While older children and adults typically experience mild cold-like symptoms, RSV can cause severe lower respiratory tract infections in young infants.
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <h4 className="font-semibold">Key Facts</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Incidence:</strong> Nearly 100% of children infected by age 2</li>
              <li>• <strong>Season:</strong> Typically October–March in most of the US, peaking December–February</li>
              <li>• <strong>Transmission:</strong> Spreads through respiratory droplets (coughing, sneezing) and contaminated surfaces</li>
              <li>• <strong>Incubation:</strong> 4-6 days from exposure to symptoms</li>
              <li>• <strong>Contagious period:</strong> 3-8 days (can be longer in infants)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hospital size={24} weight="duotone" className="text-destructive" />
            Hospitalization Rates & Severity
          </CardTitle>
          <CardDescription>
            Evidence-based data on RSV disease burden in infants
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Hospitalization Risk by Age</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Infants 0-6 months</span>
                    <span className="font-semibold text-destructive">2-3 in 100 hospitalized</span>
                  </div>
                  <Progress value={25} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-1">Highest risk group: approximately 58,000-80,000 hospitalizations annually in US infants under 1 year</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Infants 6-12 months</span>
                    <span className="font-semibold">1-2 in 100 hospitalized</span>
                  </div>
                  <Progress value={15} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Children 1-2 years</span>
                    <span className="font-semibold">0.5-1 in 100 hospitalized</span>
                  </div>
                  <Progress value={7} className="h-3" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <FirstAid size={18} className="text-destructive" />
                  Severe Cases (Hospitalized Infants)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>ICU admission:</strong> 10-20% of hospitalized infants</li>
                  <li>• <strong>Mechanical ventilation:</strong> 5-15% of hospitalized infants</li>
                  <li>• <strong>Average hospital stay:</strong> 3-5 days</li>
                  <li>• <strong>Oxygen support needed:</strong> 60-80% of hospitalized infants</li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-900">
                <h4 className="font-semibold text-sm mb-2">Mortality Risk</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Healthy full-term infants:</strong> 1-2 deaths per 100,000</li>
                  <li>• <strong>Premature infants (&lt;29 weeks):</strong> 30-40x higher risk</li>
                  <li>• <strong>Infants with heart/lung conditions:</strong> 10-20x higher risk</li>
                  <li>• <strong>US annual infant deaths:</strong> Approximately 100-300</li>
                </ul>
              </div>
            </div>

            <Alert>
              <Info size={18} weight="fill" className="text-primary" />
              <AlertDescription className="ml-2 text-sm">
                <strong>Source Context:</strong> These statistics come from CDC surveillance data, large epidemiological studies, and systematic reviews published in peer-reviewed journals (see citations in procedure detail). Rates may vary by region, year, and circulating viral strains.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>High-Risk Groups: Who is Most Vulnerable?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            While any infant can develop severe RSV, certain factors significantly increase the risk of hospitalization and complications:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Medical Risk Factors</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <Warning size={16} className="text-destructive flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Prematurity</strong> (born &lt;37 weeks, especially &lt;29 weeks): 3-5x higher hospitalization risk</span>
                </li>
                <li className="flex gap-2">
                  <Warning size={16} className="text-destructive flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Chronic lung disease</strong> (bronchopulmonary dysplasia): 5-10x higher risk</span>
                </li>
                <li className="flex gap-2">
                  <Warning size={16} className="text-destructive flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Congenital heart disease</strong> (especially hemodynamically significant): 3-4x higher risk</span>
                </li>
                <li className="flex gap-2">
                  <Warning size={16} className="text-caution flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Immune deficiency</strong> or immunosuppression</span>
                </li>
                <li className="flex gap-2">
                  <Warning size={16} className="text-caution flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Neuromuscular disorders</strong> affecting ability to clear secretions</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Environmental & Social Risk Factors</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Young age</strong>: Infants &lt;3 months at highest risk</span>
                </li>
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Exposure to tobacco smoke</strong>: 1.5-2x higher risk</span>
                </li>
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Daycare or multiple siblings</strong>: Increased exposure</span>
                </li>
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Crowded living conditions</strong></span>
                </li>
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>Born during RSV season</strong> (October-March)</span>
                </li>
                <li className="flex gap-2">
                  <Info size={16} className="text-primary flex-shrink-0 mt-0.5" weight="fill" />
                  <span><strong>No or limited breastfeeding</strong>: Reduced passive immunity</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Symptoms & When to Seek Care</CardTitle>
          <CardDescription>Recognizing RSV and knowing when medical attention is needed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <h4 className="font-semibold mb-2">Initial Symptoms (Days 1-3)</h4>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Runny nose, congestion</li>
              <li>• Cough (often becomes worse over time)</li>
              <li>• Sneezing</li>
              <li>• Decreased appetite</li>
              <li>• Low-grade fever (not always present)</li>
            </ul>
          </div>

          <Separator />

          <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-2 border-destructive">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
              <Warning size={20} weight="fill" />
              Warning Signs: Seek Medical Attention Immediately
            </h4>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Difficulty breathing:</strong> Fast breathing (&gt;60 breaths/min in infants), chest retractions (skin pulling in around ribs), nasal flaring</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Pauses in breathing</strong> (apnea), especially in young infants &lt;3 months</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Blue or gray color</strong> around lips, mouth, or fingernails (cyanosis)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Severe cough or wheezing</strong> (high-pitched whistling sound when breathing)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Significantly decreased fluid intake</strong> or very few wet diapers (dehydration)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>Extreme lethargy</strong> or difficulty waking</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold min-w-fit">🚨</span>
                <span><strong>High fever</strong> in infants &lt;3 months (≥100.4°F / 38°C rectal)</span>
              </li>
            </ul>
          </div>

          <Alert>
            <Info size={18} weight="fill" className="text-primary" />
            <AlertDescription className="ml-2 text-sm">
              <strong>When in doubt, call your pediatrician.</strong> RSV can worsen rapidly, especially in young infants. Healthcare providers would rather evaluate your baby and reassure you than miss a serious infection.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-evidence">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck size={24} weight="duotone" className="text-evidence" />
            Prevention Options: What Works?
          </CardTitle>
          <CardDescription>Evidence-based strategies to reduce RSV risk</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Badge className="bg-evidence text-evidence-foreground">Most Effective</Badge>
                Immunization Strategies
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1. Maternal RSV Vaccination (RSVPreF3, Abrysvo)</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Given to mother during pregnancy (32-36 weeks gestation)</li>
                    <li>• <strong>Effectiveness:</strong> Reduces severe RSV in infants by ~57% in first 6 months</li>
                    <li>• <strong>Protection:</strong> Antibodies transfer to baby before birth</li>
                    <li>• <strong>Duration:</strong> ~6 months after birth (covers highest-risk period)</li>
                    <li>• <strong>FDA approved:</strong> August 2023</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <p className="font-semibold">2. Nirsevimab (Beyfortus) - Infant Immunization</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Single-dose injection given to infant after birth</li>
                    <li>• <strong>Effectiveness:</strong> Reduces RSV hospitalization by ~70-75%</li>
                    <li>• <strong>Protection:</strong> Long-acting monoclonal antibody</li>
                    <li>• <strong>Duration:</strong> Lasts entire RSV season (~5 months)</li>
                    <li>• <strong>FDA approved:</strong> July 2023; CDC recommends for all infants &lt;8 months during RSV season</li>
                  </ul>
                </div>

                <Alert className="mt-3">
                  <Info size={16} weight="fill" className="text-primary" />
                  <AlertDescription className="ml-2 text-xs">
                    <strong>Important:</strong> Infants should receive either maternal vaccine protection OR nirsevimab, not both. Discuss with your healthcare provider which approach is best for your situation.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
              <h4 className="font-semibold mb-2">
                <Badge variant="outline" className="mb-1">Supporting Strategies</Badge>
                <span className="block">Hygiene & Risk Reduction</span>
              </h4>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Hand hygiene:</strong> Wash hands frequently, especially before touching baby</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Avoid sick contacts:</strong> Keep baby away from anyone with cold symptoms</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Limit crowded spaces:</strong> Especially during RSV season (October-March)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Clean surfaces:</strong> Disinfect toys, doorknobs, countertops regularly</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Breastfeeding:</strong> Provides antibodies; associated with reduced RSV severity</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Avoid tobacco smoke:</strong> Significantly increases RSV risk and severity</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span><strong>Consider delaying daycare:</strong> If possible, delay until after 3-6 months</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Note:</strong> These measures reduce risk but do not eliminate it. RSV is highly contagious and spreads easily in communities during peak season.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendUp size={24} weight="duotone" className="text-primary" />
            Long-Term Outcomes & Recurrent Wheezing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            Beyond the immediate illness, severe RSV bronchiolitis in infancy has been associated with increased risk of respiratory problems later in childhood:
          </p>

          <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-900">
            <h4 className="font-semibold text-sm mb-2">Long-Term Respiratory Impact</h4>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Recurrent wheezing:</strong> 2-3x increased risk in children who had severe infant RSV</li>
              <li>• <strong>Childhood asthma:</strong> Studies show 25-40% of children hospitalized with RSV develop asthma, compared to 10-15% without severe RSV</li>
              <li>• <strong>Duration:</strong> Wheezing often persists through early childhood; less clear if effect continues into adolescence</li>
              <li>• <strong>Uncertainty:</strong> It's not fully established whether RSV <em>causes</em> asthma or whether children predisposed to asthma are more likely to have severe RSV</li>
            </ul>
          </div>

          <Alert>
            <Info size={18} weight="fill" className="text-primary" />
            <AlertDescription className="ml-2 text-sm">
              <strong>Research Context:</strong> Multiple large cohort studies have documented this association. While the exact causal mechanism remains under investigation, preventing severe RSV may reduce subsequent respiratory morbidity. This is an active area of research.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>Questions to Discuss with Your Healthcare Provider</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>Does my baby have any risk factors that make RSV more dangerous?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>Should I get the maternal RSV vaccine during pregnancy, or should my baby receive nirsevimab after birth?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>What are current RSV activity levels in our area?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>Is nirsevimab covered by my insurance? What is the out-of-pocket cost?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>What specific signs should I watch for that would require calling you or going to the ER?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>If my baby gets RSV despite immunization, is it likely to be less severe?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-semibold">•</span>
              <span>Are there any updates to RSV prevention recommendations since this information was reviewed?</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Alert className="border-primary">
        <Info size={20} weight="fill" className="text-primary" />
        <AlertTitle>Sources & Evidence Quality</AlertTitle>
        <AlertDescription className="ml-2">
          <p className="mb-2">This information is compiled from:</p>
          <ul className="text-sm space-y-1">
            <li>• CDC RSV surveillance data and clinical guidelines (2023)</li>
            <li>• Randomized controlled trials of maternal vaccine (NEJM 2023) and nirsevimab (NEJM 2022)</li>
            <li>• Systematic reviews of RSV disease burden (The Lancet 2017, Pediatrics 2020)</li>
            <li>• AAP clinical reports and ACIP recommendations (2023)</li>
            <li>• Long-term outcome studies (Pediatric Pulmonology 2013)</li>
          </ul>
          <p className="mt-3 text-sm">
            <strong>Last reviewed:</strong> February 15, 2024 | <strong>Next review due:</strong> February 15, 2025
          </p>
          <p className="text-xs mt-2 text-muted-foreground">
            For complete citations, see the RSV Prevention procedure detail page.
          </p>
        </AlertDescription>
      </Alert>
    </div>
  )
}
