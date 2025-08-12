"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  live?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
    >
      <Card className="rounded-3xl border-white/10 bg-slate-900/60">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold">{p.title}</h3>
        </CardHeader>
        <CardContent className="text-slate-300">
          <p>{p.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0 gap-2">
          {p.repo && (
            <Button asChild size="sm" variant="outline" className="rounded-xl">
              <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>
            </Button>
          )}
          {p.live && (
            <Button asChild size="sm" className="rounded-xl">
              <a href={p.live} target="_blank" rel="noreferrer">Live</a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
