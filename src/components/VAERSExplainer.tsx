import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Warning, CheckCircle, Info, Database } from '@phosphor-icons/react'

export function VAERSExplainer() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Database size={32} weight="duotone" className="text-primary" />
          <h1 className="text-3xl font-semibold">Understanding VAERS Data</h1>
        </div>
        <p className="text-muted-foreground">
          What the Vaccine Adverse Event Reporting System is, how it works, and how to interpret its data
        </p>
      </div>

      <Alert>
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2">
          <strong>Key Principle:</strong> VAERS data shows <em>correlation</em> (events reported after vaccination), not <em>causation</em> (events proven to be caused by vaccination). This distinction is crucial for informed interpretation.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>What is VAERS?</CardTitle>
          <CardDescription>
            The national vaccine safety surveillance system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The <strong>Vaccine Adverse Event Reporting System (VAERS)</strong> is a national early warning system co-managed by the CDC and FDA. Established in 1990, it collects reports of health problems (adverse events) that occur after vaccination.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <CheckCircle size={20} weight="fill" className="text-evidence" />
              Purpose and Strengths
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm ml-6">
              <li>Detects potential safety signals that warrant further investigation</li>
              <li>Anyone can report: healthcare providers, patients, parents, vaccine manufacturers</li>
              <li>Accessible public database for transparency</li>
              <li>Has successfully identified rare side effects (e.g., intussusception with rotavirus vaccine, myocarditis with COVID vaccines)</li>
              <li>Rapid reporting allows early detection of problems</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Warning size={20} weight="fill" className="text-caution" />
              Important Limitations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm ml-6">
              <li><strong>Reports are unverified:</strong> Anyone can submit a report without medical documentation</li>
              <li><strong>No causation established:</strong> Reported events may be coincidental timing, not caused by vaccine</li>
              <li><strong>Reporting bias:</strong> Unusual or severe events more likely to be reported than mild/common ones</li>
              <li><strong>Underreporting:</strong> Many mild reactions go unreported; estimated only 1-10% of reactions are reported</li>
              <li><strong>Cannot calculate risk rates:</strong> No denominator data (total vaccinations administered) for comparison</li>
              <li><strong>Duplicate reports:</strong> Same event may be reported by doctor, parent, and manufacturer</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle>Correlation vs. Causation: A Critical Distinction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Correlation (VAERS)</Badge>
              <p className="text-sm">
                <strong>Definition:</strong> Two events happen around the same time
              </p>
              <p className="text-sm text-muted-foreground">
                "My child got a vaccine on Monday and developed a rash on Wednesday."
              </p>
              <p className="text-sm text-muted-foreground">
                This timing <em>might</em> indicate causation, or it might be coincidence. Further investigation needed.
              </p>
            </div>

            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Causation (Confirmed Link)</Badge>
              <p className="text-sm">
                <strong>Definition:</strong> One event directly causes the other
              </p>
              <p className="text-sm text-muted-foreground">
                Established through controlled studies, biological mechanism, consistent patterns across populations, and dose-response relationship.
              </p>
              <p className="text-sm text-muted-foreground">
                Example: Fever after MMR vaccine (proven causal relationship in ~5-15% of recipients).
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          <Alert>
            <Info size={18} weight="fill" />
            <AlertDescription className="ml-2 text-sm">
              <strong>Example of why this matters:</strong> Millions of babies receive vaccines at 2, 4, and 6 months - the same ages when many developmental conditions first become apparent (autism, seizure disorders, etc.). If a child shows signs of autism at 18 months (typical age of diagnosis), and they received vaccines at 2, 4, 6, 12, and 15 months, the temporal association is inevitable but does not prove causation. Extensive research has found no causal link between vaccines and autism.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Interpret VAERS Data Responsibly</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">1</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Understand the denominator</h3>
                <p className="text-sm text-muted-foreground">
                  If VAERS shows 100 reports of a symptom after a vaccine, but 10 million doses were given, that's 0.001%. Context matters.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">2</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Look for confirmed causal relationships</h3>
                <p className="text-sm text-muted-foreground">
                  FDA/CDC investigate VAERS signals. When causation is confirmed, it appears in package inserts and official guidance (e.g., anaphylaxis risk 1 in 1 million).
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">3</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Consider background rates</h3>
                <p className="text-sm text-muted-foreground">
                  Compare reported event rates to how often these events occur naturally in the population. SIDS occurs in ~40 per 100,000 live births with or without vaccination.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">4</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Seek follow-up studies</h3>
                <p className="text-sm text-muted-foreground">
                  VAERS signals trigger formal studies (Vaccine Safety Datalink, Clinical Immunization Safety Assessment). Check for published research examining the signal.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">5</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Be wary of cherry-picking</h3>
                <p className="text-sm text-muted-foreground">
                  VAERS contains reports of car accidents, drownings, and other events with no plausible biological connection to vaccination. Focus on events with plausible mechanisms.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-evidence/30 bg-evidence/5">
        <CardHeader>
          <CardTitle>Real Vaccine Risks Identified Through Surveillance</CardTitle>
          <CardDescription>Examples of confirmed adverse events detected by VAERS and confirmed through follow-up research</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Intussusception with RotaShield (1999)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS detected increased intussusception risk with first rotavirus vaccine. Follow-up studies confirmed risk of 1 in 10,000. Vaccine was withdrawn. Current rotavirus vaccines have much lower risk (1-5 per 100,000) and are still used because benefits outweigh risks.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Febrile Seizures with MMRV (2008)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS signal showed higher febrile seizure rates with combined MMRV vs separate MMR+Varicella. Confirmed risk: 1 additional febrile seizure per 2,300-2,600 doses. Recommendation changed to prefer separate vaccines for first dose.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Myocarditis with COVID-19 mRNA Vaccines (2021)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS detected rare myocarditis cases in young males after mRNA vaccines. Confirmed risk: ~12-13 per 100,000 males 12-17 after second dose. Most cases mild and resolve. Risk still far lower than myocarditis risk from COVID-19 infection itself (~150 per 100,000 infected males).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <Warning size={20} weight="fill" />
        <AlertTitle>Misinformation Warning</AlertTitle>
        <AlertDescription className="space-y-2 text-sm">
          <p>
            VAERS data is frequently misused to spread fear about vaccines. Common tactics include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Citing raw VAERS numbers without context or causation evidence</li>
            <li>Comparing unrelated events that happen after vaccination</li>
            <li>Ignoring follow-up studies that investigated and cleared signals</li>
            <li>Claiming "doctors aren't reporting" to inflate fear despite no evidence</li>
            <li>Misrepresenting temporary symptoms (fever, soreness) as dangerous reactions</li>
          </ul>
          <p className="pt-2">
            <strong>Critical thinking:</strong> When someone cites VAERS to discourage vaccination, ask: "Has this been confirmed through controlled studies?" and "What's the actual risk compared to the disease itself?"
          </p>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Additional Vaccine Safety Monitoring Systems</CardTitle>
          <CardDescription>VAERS is just one part of a comprehensive safety net</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Vaccine Safety Datalink (VSD)</h3>
              <p className="text-sm text-muted-foreground">
                Collaboration with 9 healthcare organizations covering 12 million people. Uses electronic health records to conduct rigorous studies with comparison groups. Can establish causation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Clinical Immunization Safety Assessment (CISA)</h3>
              <p className="text-sm text-muted-foreground">
                Network of vaccine safety experts who investigate complex cases and provide clinical consultation for individuals with unusual reactions.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Post-Licensure Rapid Immunization Safety Monitoring (PRISM)</h3>
              <p className="text-sm text-muted-foreground">
                FDA system using claims data from Medicare, Medicaid, and private insurers to detect safety issues quickly in newly licensed vaccines.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Biologics Effectiveness and Safety (BEST)</h3>
              <p className="text-sm text-muted-foreground">
                FDA initiative analyzing real-world data from multiple sources including electronic health records, registries, and claims databases.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Bottom Line for Parents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>VAERS is valuable but limited.</strong> It's an early warning system, not a definitive answer. Reports to VAERS should prompt investigation, not immediate conclusions.
          </p>
          <p>
            <strong>Confirmed risks are disclosed.</strong> When VAERS signals lead to confirmed causal relationships, this information is added to vaccine package inserts, discussed in CDC guidance, and included in informed consent conversations.
          </p>
          <p>
            <strong>All medical interventions carry risks.</strong> The question is never "Is this perfectly safe?" but rather "Do benefits outweigh risks for my child in their specific context?" This is why informed consent matters.
          </p>
          <p>
            <strong>Raw VAERS data should not drive decisions alone.</strong> Consider VAERS reports alongside clinical trial data, post-marketing studies, disease risks, and expert guidance. Discuss concerns with your healthcare provider.
          </p>
          <p>
            <strong>Transparency is a feature, not a bug.</strong> The fact that VAERS is public and includes unverified reports is intentional - it prioritizes transparency and early detection over PR. This openness should increase trust, not decrease it.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
