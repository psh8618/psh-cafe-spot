import { useParams } from "react-router";
import { useCafeDetail } from "@/hooks/useCafe";
import { Suspense } from "react";
import Container from "@/components/commons/Container";
import CafeDetail from "@/components/CafeDetail";
import LoadingSpinner from "@/components/commons/LoadingSpinner";

export default function CafeDetailPage() {
  const { id } = useParams();
  const { data: cafe } = useCafeDetail(Number(id));

  return (
    <Container>
      <Suspense fallback={<LoadingSpinner />}>
        <CafeDetail cafe={cafe} />
      </Suspense>
    </Container>
  );
}
